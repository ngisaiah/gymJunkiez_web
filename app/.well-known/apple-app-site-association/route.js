export function GET() {
  const aasa = {
    applinks: {
      apps: [],
      details: [
        {
          appID: '69YV6P6AKZ.com.isaiahng.weightup',
          paths: ['/ref/*'],
        },
      ],
    },
  };

  return new Response(JSON.stringify(aasa), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
