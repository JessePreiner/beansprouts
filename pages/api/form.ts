import { PrismaClient } from '@prisma/client'
export default async function handler(req, res) {

  const prisma = new PrismaClient()

  const body = {name: req.body.name, message: req.body.message, email: req.body.email, 'g-recaptcha-response': req.body.gReCaptchaToken}
  try {
    // const submission = await prisma.Submission.create({
    //   data: {
    //     name: body.email,
    //     message: body.message,
    //     email: body.email,
    //   }
    // })

    const postResult = await fetch('https://formspree.io/f/xpzgznpd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
    const postResultJson = await postResult.json()

    console.log(JSON.stringify(postResultJson))
    res.status(200).json({ postResult, error: null })
  } catch (error) {
    res.status(500).json({ postResult: null, error: error.message })
  }

}