import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCustomer } from "./customerSlice";
import * as styled from "./styledCustomer";
const Customer = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.listCustomer);
  useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);
  return (
    <>
      <styled.Background>
        <styled.Wrap_Banner>
          <styled.Banner>READ OUR TESTIMONIALS</styled.Banner>
        </styled.Wrap_Banner>
        <styled.Wrap_Banner>
          <styled.Title>
            We appreciate every kind word from our awesome clients
          </styled.Title>
        </styled.Wrap_Banner>
        <styled.Content>
          <styled.Wrap_Content>
            {customer.map((val, index) => {
              return (
                <>
                  <styled.Wrap_Detail_List>
                    <styled.User_Image>
                      <img src={val.img} alt="" />
                    </styled.User_Image>
                    <styled.Content_Detail>
                      <styled.Name>{val.name}</styled.Name>
                      <styled.Department> {val.department}</styled.Department>
                      <styled.Borders></styled.Borders>
                      <styled.Sub_Content>
                        <div>{val.content}</div>
                      </styled.Sub_Content>
                    </styled.Content_Detail>
                  </styled.Wrap_Detail_List>
                </>
              );
            })}
          </styled.Wrap_Content>
        </styled.Content>
      </styled.Background>
    </>
  );
};
export default Customer;
