import { DefaultLayout } from "@/layouts";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DocumentTrackingProjectPage() {
  return (
    <DefaultLayout meta={{ title: "JSON to PDF" }}>
      <main className="space-y-16">
        <header>
          <Link
            href="/"
            className="inline-flex space-x-2 items-center hover:underline text-gray-500 text-sm"
          >
            <Icon icon="radix-icons:arrow-left" className="mr-1" />
            Back to home
          </Link>
        </header>
        <section className="space-y-3">
          <h2 className="font-medium">JSON to PDF</h2>
          <p className="text-gray-500">
            A JSON-to-PDF report generator created for software testing
            documentation. Testing tools can export execution results into JSON
            format and the application will convert the data into PDF reports.
            The application is developed using <mark>Node.js</mark>.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Example generated PDF</h2>
          <Link
            target="_blank"
            href="/pdfs/report.pdf"
            className={cn(buttonVariants(), "gtm-live-demo-link")}
          >
            See PDF
          </Link>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Example JSON</h2>
          <pre className="p-4 border rounded-md max-h-64 overflow-y-auto bg-gray-50">
            <code className="whitespace-pre-wrap text-gray-500">
              {JSON.stringify(
                {
                  title: "Google Search Scenario",
                  description:
                    'Searching for the keyword "Google" on Google Search to find related information.',
                  imageQuality: 0.5,
                  saveToFolder: "C:\\Reports",
                  testCases: [
                    {
                      testCaseName: "Google Search Flow",
                      steps: [
                        {
                          name: "User opens the Google homepage",
                          status: "PASSED",
                          description:
                            "The Google homepage is successfully displayed in the browser.",
                          screenshot: "C:\\image1.png",
                        },
                        {
                          name: "User enters the keyword Google in the search box",
                          status: "PASSED",
                          description:
                            'The keyword "Google" is successfully entered into the search field.',
                          screenshot: "C:\\image2.png",
                        },
                        {
                          name: "Displays the search results",
                          status: "PASSED",
                          description:
                            'Search results related to the keyword "Google" are successfully displayed.',
                          screenshot: "C:\\image3.png",
                        },
                      ],
                    },
                  ],
                },
                null,
                2,
              )}
            </code>
          </pre>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">How to use</h2>
          <pre className="p-4 border rounded-md max-h-64 overflow-x-auto bg-gray-50">
            <code className="text-gray-500">
              node &quot;path-to-report-generator.js&quot;
              &quot;path-to-input.json&quot;
            </code>
          </pre>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Goals</h2>
          <ol className="list-decimal ml-5 space-y-2 text-gray-500">
            <li>
              Enable comprehensive software testing documentation, execution
              steps, and statuses.
            </li>
            <li>
              Provide simple page navigation to improve report readability.
            </li>
            <li>
              Generate reports with optimized file sizes for easier storage and
              sharing.
            </li>
          </ol>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Developed features</h2>
          <ol className="list-decimal ml-5 space-y-2 text-gray-500">
            <li>
              Detailed test case documentation with execution steps, statuses,
              and screenshots.
            </li>
            <li>Table of contents for simple navigation.</li>
            <li>Image compression to optimize PDF size.</li>
          </ol>
        </section>
      </main>
    </DefaultLayout>
  );
}
