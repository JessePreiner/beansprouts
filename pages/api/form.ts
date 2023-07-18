export default async function handler(req, res) {

  type RequestBody = {
    name:String;
    message: String;
    email: String;
    'g-recaptcha-response': String
  }

  const body:RequestBody = {
    name: req.body.name,
    message: req.body.message,
    email: req.body.email,
    'g-recaptcha-response': req.body.gReCaptchaToken
  }

  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }

  try {
    const postResult = await fetch('https://formspree.io/f/xpzgznpd', params)
    const postResultJson = await postResult.json()

    console.log(JSON.stringify(postResultJson))
    res.status(200).json({ postResult, error: null })
  } catch (error) {
    res.status(500).json({ postResult: null, error: error.message })
  }

}