// server response

export const GET = async () => {
  const markup = "<html><body><h1>Prachi Pharma</h1></body></html>";

  return new Response(markup, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
