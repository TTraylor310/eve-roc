import { fetchEveOnlineStatus } from '@/utils/requests'
import EveStatusPage from '@/components/EveStatus'


const HomePage = async () => {

  const eveServerInfo = await fetchEveOnlineStatus()

  return (
    <div>
      <h1>Home</h1>
      <EveStatusPage info={eveServerInfo} />
    </div>
  )
}

export default HomePage