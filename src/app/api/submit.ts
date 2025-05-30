import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import formidable, { File } from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disables Next.js's default body parser
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new formidable.IncomingForm({
    maxFileSize: 2 * 1024 * 1024, // 2MB
  });

  interface FormFields {
    name?: string;
    message?: string;
    [key: string]: any;
  }

  interface FormFiles {
    file?: File;
    [key: string]: File | File[] | undefined;
  }

  form.parse(
    req,
    async (
      err: Error | null,
      fields: FormFields,
      files: FormFiles
    ): Promise<void> => {
      if (err) {
        if ((err as any).code === "LIMIT_FILE_SIZE") {
          return res
            .status(400)
            .json({ message: "File size exceeds 2MB limit." });
        }
        return res.status(500).json({ message: "Error parsing form data" });
      }

      const { name, message } = fields;
      const file = files.file as File | undefined;

      // Additional check for file size (in case formidable doesn't catch it)
      if (file && file.size > 2 * 1024 * 1024) {
        return res
          .status(400)
          .json({ message: "File size exceeds 2MB limit." });
      }

      // Configure your SMTP transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Prepare attachments if file exists
      const attachments: Array<{ filename?: string; path?: string }> = file
        ? [
            {
              filename: file.originalFilename ?? undefined,
              path: file.filepath,
            },
          ]
        : [];

      try {
        await transporter.sendMail({
          from: `"Assignment Submission" <${process.env.EMAIL_USER}>`,
          to: "aeben.adebanjo@gmail.com",
          subject: "New Assignment Submission",
          text: `Name: ${name}\nMessage: ${message}`,
          attachments,
        });

        res.status(200).json({ message: "Submission sent successfully!" });
      } catch (error) {
        res.status(500).json({ message: "Failed to send submission." });
      }
    }
  );
}
