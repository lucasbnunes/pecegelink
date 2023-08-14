import useViewport from "../../../hooks/useViewport"
import { useContacts } from "../useContacts"
import { List } from "./list"
import { Table } from "./table"

const desktopSize = 980

export function ResponsiveContactsView() {
  const { data, isLoading } = useContacts()
  const { width } = useViewport()

  if (isLoading) {
    return <>Carregando</>
  }

  if (width && width > desktopSize) {
    return <Table data={data} />
  } else {
    return <List data={data} />
  }
}