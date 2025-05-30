import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8">
      <main className="w-full max-w-3xl bg-white dark:bg-[#181818] rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Assignment: Build a Functional WordPress Website
        </h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Objective</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Design and develop a fully functional WordPress website that
            includes essential pages, design elements, and functionality based
            on a specific theme (e.g., personal blog, portfolio, small business,
            NGO, or fictional company).
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>
              Choose a purpose for your website (Personal Blog, Portfolio,
              Business, NGO, or Online Resume/CV).
            </li>
            <li>
              Install WordPress and select a free theme from the WordPress theme
              repository.
            </li>
            <li>
              Install at least 3 useful plugins (e.g., SEO, contact form,
              security).
            </li>
            <li>
              Create the following pages:
              <ul className="list-disc list-inside ml-6">
                <li>Home</li>
                <li>About</li>
                <li>Services or Projects (based on your site type)</li>
                <li>Blog (with at least 2 blog posts)</li>
                <li>Contact (with a working contact form)</li>
              </ul>
            </li>
            <li>
              Customize the header, footer, sidebar, logo, favicon, menu,
              colors, and fonts.
            </li>
            <li>Ensure the contact form works and add social media links.</li>
            <li>Install and configure a backup or security plugin.</li>
            <li>
              <span className="font-semibold">Bonus:</span> Add an image
              gallery, video embed, or a simple e-commerce page.
            </li>
            <li>
              Submit a 1-page document explaining your site’s purpose,
              theme/plugins used, and any challenges faced.
            </li>
          </ol>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Assessment Criteria</h2>
          <table className="w-full text-left border border-gray-300 dark:border-gray-700 mb-4">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2 border-b border-gray-300 dark:border-gray-700">
                  Criteria
                </th>
                <th className="p-2 border-b border-gray-300 dark:border-gray-700">
                  Marks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  Content Completeness (pages, posts, menu)
                </td>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  20
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  Design and Layout
                </td>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  20
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  Use of Plugins & Functionality
                </td>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  20
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  Customization and Branding
                </td>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  20
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  Documentation & Explanation
                </td>
                <td className="p-2 border-b border-gray-200 dark:border-gray-700">
                  10
                </td>
              </tr>
              <tr>
                <td className="p-2">Creativity & Effort</td>
                <td className="p-2">10</td>
              </tr>
              <tr className="font-bold">
                <td className="p-2">Total</td>
                <td className="p-2">100</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Submission Deadline:</span> Tuesday,
            3rd June 2025
          </p>
        </section>
        <div className="mt-8 flex justify-center">
          <a
            href="/submission"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Go to Submission Page
          </a>
        </div>
      </main>
    </div>
  );
}
