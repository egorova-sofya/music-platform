import React, { FC, ReactNode, useRef } from "react";

interface Props {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

const FileUpload: FC<Props> = ({ setFile, accept, children }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  const ref = useRef<HTMLInputElement>();
  return (
    <div onClick={() => ref.current.click()}>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
