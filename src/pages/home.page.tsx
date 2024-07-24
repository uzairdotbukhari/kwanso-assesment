import { FC, useMemo, useState } from "react";
import { Container } from "@mui/material";

import DataTable from "../components/dataTable.component";
import { useQuery } from "react-query";
import Pagination from "../components/customPagination.component";
import { getProfiles } from "../utils/services/profile.service";
import { useNavigate } from "react-router-dom";
import InputField from "../elements/input-field/input-field.component";

const Home: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [searchVal, setSearchVal] = useState<string>("");

  const navigate = useNavigate();

  const tableColumns = useMemo(
    () => [
      { key: "picture", title: "", width: 100 },
      { key: "name", title: "Name", width: 300 },
      { key: "email", title: "E-mail" },
      { key: "action", title: "", width: 150 },
    ],
    []
  );

  const { isFetched, data } = useQuery({
    queryKey: ["fetchProfiles", page, pageSize],
    queryFn: async () => {
      const response = await getProfiles(page, pageSize);
      const { results } = response as IProfileRes;

      const rowData = results.map((profile) => ({
        id: profile.id.value,
        name: `${profile.name.first} ${profile.name.last}`,
        email: profile.email,
        picture: (
          <img className="rounded-full" src={profile.picture.thumbnail} />
        ),
        action: (
          <a
            className="font-bold text-blue-600 cursor-pointer"
            onClick={() =>
              navigate("/profile", {
                state: { profile },
              })
            }
          >
            View Profile
          </a>
        ),
      }));

      return rowData;
    },
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
  });

  const filteredData = useMemo(() => {
    return data
      ? data?.filter(
          (item) =>
            item.name.toLowerCase().includes(searchVal.toLowerCase()) ||
            item.email.toLowerCase().includes(searchVal.toLowerCase())
        )
      : [];
  }, [searchVal, data]);

  return (
    <Container maxWidth="xl">
      <h1 className="text-2xl my-2 mb-10 text-center">
        List of all profiles with pagination
      </h1>
      <InputField
        placeholder="Search by name, email"
        title="Search"
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <DataTable
        isLoading={!isFetched}
        columns={tableColumns}
        rowData={filteredData ?? []}
      />
      <Pagination
        page={page}
        totalPage={5}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </Container>
  );
};

export default Home;
