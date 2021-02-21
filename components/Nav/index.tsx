import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import { usePage } from "../../store/page";

import { Container, Item } from "./styles";

const Nav: React.FC = () => {
  const { list, select, current, create } = usePage();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  if (loading) return null;

  return (
    <Container>
      {list.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          onClick={() => select(item.id)}
          active={current === item.id}
        />
      ))}

      <Item key={0} name="Criar página" onClick={() => create()}>
        <FaPlus style={{ fill: "#767676" }} size={20} />
      </Item>
    </Container>
  );
};

export default Nav;
