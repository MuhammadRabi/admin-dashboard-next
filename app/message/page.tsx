import PageHeading from "@/components/PageHeading"
import { fetchUsers } from "@/lib/data"

const messagePage = async () => {
  const users = await fetchUsers()
  console.log(users)
  return (
    <section>
      <PageHeading title="messages" />
      <div className="page-wrapper"></div>
    </section>
  )
}

export default messagePage
