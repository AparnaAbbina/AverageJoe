async function askQuestion() {
    console.log(process.env.REACT_APP_API_KEY);
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
      'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json'
    };
    
    const body = {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are Powering Futures Advisor, a career advisor for 16-18 year olds in Scotland.'
        },
        {
          role: 'user',
          content: 'I need help finding my first job.'
        }
      ]
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
    export default askQuestion;
  
  