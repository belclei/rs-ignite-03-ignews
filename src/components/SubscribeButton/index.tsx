import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()

  async function handleSubscribe() {
    console.log('começou')
    if (!session) {
      signIn('github')
      return
    }
    console.log('passou')

    // criação da checkout session
    try {
      const response = await api.post('/subscribe')

      console.log('data', response.data)
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe now
    </button>
  )
}
