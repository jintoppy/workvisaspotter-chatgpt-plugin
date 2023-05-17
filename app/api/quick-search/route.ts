import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");

  const baseUrl = "https://workvisaspotter.xyz";

  const url = `${baseUrl}/api/quick-search?keyword=${keyword}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    } as HeadersInit,
  });
  const jobs = await res.json();
  const updatedJobs = jobs.map((job: any) => {
    const newUrl = `${baseUrl}/job/${encodeURIComponent(
      job.slug
    )}?utm_source=chatgpt&utm_medium=chat`;
    return {
      title: job.title,
      description: job.description,
      url: newUrl,
      salary: job.salary,
    };
  });

  return NextResponse.json(updatedJobs);
}
