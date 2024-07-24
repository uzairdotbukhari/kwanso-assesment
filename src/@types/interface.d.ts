interface IPaginationProps {
  page: number;
  totalPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

interface ITableColumns {
  title: string;
  key: string;
  width?: number;
}

interface ITableRowData {
  [key: string]: string | number | React.ReactNode;
}

interface IDataTableProps {
  columns: ITableColumns[];
  rowData: ITableRowData[] | [];
  isLoading: boolean;
}

interface IProfileRes {
  results: IProfile[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
  
}

interface IProfile {
  gender: string
  name: IName
  location: ILocation
  email: string
  login: ILogin
  dob: IDob
  registered: {
    date: string
    age: number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: IPicture
  nat: string
}

interface Name {
  title: string
  first: string
  last: string
}

interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}

interface Street {
  number: number
  name: string
}

interface Coordinates {
  latitude: string
  longitude: string
}

interface Timezone {
  offset: string
  description: string
}

interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

interface Dob {
  date: string
  age: number
}

interface Picture {
  large: string
  medium: string
  thumbnail: string
}

