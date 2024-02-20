import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.route('/users/?:userId')
  .get((req: Request, res: Response) => {
    const { userId } = req.params
    res.send(`Get all users ${userId}`)
  })
  .post((req: Request, res: Response) => {
    res.send('Create a user')
  })
  .delete((req: Request, res: Response) => {
    res.send('Delete all users')
  })
  .put((req: Request, res: Response) => {
    res.send('Update all users')
  })

app.listen(3009, () => {
  console.log('Server is listening on port 3009')
})