import React from "react";

interface Props {
  isHidden: boolean;
}

export default ({ isHidden }: Props) => {
  return (
    <footer>
      <div>
        <p>Copyright 2021</p>
        <p>Created by Mateusz Napieralski</p>
      </div>
    </footer>
  );
};
