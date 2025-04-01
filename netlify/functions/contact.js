exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  console.log('Received form data:', { name, email, message });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Thank you for your interest, ${name}` }),
  };
};