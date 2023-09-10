const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello via Bun!");
  },
});

console.log(`Server started at http://localhost:${server.port}`);
