import { useDispatch } from "react-redux";
import CardContainer from "../../components/Card";
import {
  CommonReducer,
  getCategory,
  getProducts,
} from "../../redux/commonReducer";
import React from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import { Loader } from "../../components/Loader";

import TopBar from "../../components/Topbar";

import { ProductType } from "../../services/interfaces";
import Cart from "../../components/Cart";

import { styled } from "@mui/system";

const Container = styled("div")`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchInput = styled("input")`
  border: 2px solid #dbdde2;
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;

  &:focus-visible {
    border: 2px solid #42a54a;
    outline: 0;
  }

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

const Dropdown = styled("select")`
  border: 2px solid #dbdde2;
  padding: 0.5rem;

  border-radius: 4px;
  background: #f5f5f9;
  text-transform: capitalize;

  &:focus-visible {
    border: 2px solid #42a54a;
    outline: 0;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

export default function Dashboard() {
  const dispatch = useDispatch<any>();

  const { Category, Products, loading } = useSelector<
    RootStateType,
    CommonReducer
  >((state) => state.common);

  const [state, setState] = React.useState(0);

  const [fullproduct, setFullproduct] = React.useState({});

  const [productsList, setProductsList] = React.useState<ProductType[]>([]);

  const [currentCategory, setCurrentCategory] = React.useState("");

  const [error, setError] = React.useState("");

  React.useEffect(() => {
    dispatch(getProducts(Category[0]))
      .unwrap()
      .then(() => {
        setError("");
      })
      .catch((err: any) => {
        setError("Network Error");
      });
  }, [Category]);

  React.useEffect(() => {
    setProductsList(Products);
  }, [Products]);

  React.useEffect(() => {
    dispatch(getCategory())
      .unwrap()
      .then(() => {
        setError("");
      })
      .catch((err: any) => {
        setError("Network Error");
      });
  }, []);

  return (
    <section className="dashboard">
      {loading && <Loader loading={loading} />}
      <TopBar />

      <div className="cover-image"></div>
      <div className="profile-pic mx-4"></div>

      {state === 0 ? (
        <div className="row m-0 mt-4 px-3">
          <Container className="p-3">
            <div className="mx-2">
              <h3>Products</h3>
            </div>
            <Dropdown
              className="m-1"
              value={currentCategory}
              onChange={(e: any) => {
                dispatch(getProducts(e.target.value));
                setCurrentCategory(e.target.value);
              }}
            >
              {Category.map((data: any, index: number) => (
                <option key={data} value={data}>
                  {data.replace("-", " ")}
                </option>
              ))}
            </Dropdown>

            <SearchInput
              className="m-1"
              type="text"
              placeholder="Search..."
              onChange={(e: any) => {
                setProductsList(
                  e.target.value
                    ? Products.filter((x) =>
                        x.title
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      )
                    : Products
                );
              }}
            />
          </Container>

          <h3 className="text-center">{error}</h3>

          {productsList.map((data: any, index: number) => (
            <div className="col-md-3 p-1">
              <CardContainer
                data={data}
                key={data.id}
                productHandler={() => {
                  setState(1);
                  setFullproduct(data);
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-2 mt-3">
          <h4
            onClick={() => {
              setState(0);
              setFullproduct({});
            }}
          >
            Back
          </h4>
          <Cart data={fullproduct} />
        </div>
      )}
    </section>
  );
}
