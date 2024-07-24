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
  results: IProfile[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

interface IProfile {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: IDob;
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface IName {
  title: string;
  first: string;
  last: string;
}

interface ILocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: ICoordinates;
  timezone: ITimezone;
}

interface ICoordinates {
  latitude: string;
  longitude: string;
}

interface ITimezone {
  offset: string;
  description: string;
}

interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface IDob {
  date: string;
  age: number;
}

interface INestedObject {
  [key: string]: NestedObject;
}
