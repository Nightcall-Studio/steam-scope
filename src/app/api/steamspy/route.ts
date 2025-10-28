export async function GET() {
  try {
    const res = await fetch("https://steamspy.com/api.php?request=all&page=0", {
      cache: "no-store",
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch SteamSpy data" }),
        { status: res.status }
      );
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: "Server error", details: error.message }),
      { status: 500 }
    );
  }
}
