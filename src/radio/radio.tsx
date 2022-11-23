import React, { ReactNode, useState, useRef, CSSProperties } from "react";
import classnames from "classnames";
import "./index.scss";

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const Radio = (props: RadioProps) => {
  const {
    children,
    className,
    style,
    defaultChecked,
    // checked,
    onChange,
    ...others
  } = props;

  const [checked, setChecked] = useState(false);
  const inputEl = useRef(null);
  const cls = classnames({
    "ant-radio": true,
    [`ant-radio-checked`]: checked,
  });

  const wrapperCls = classnames({
    "ant-radio-wrapper": true,
  });

  const handleClick = (e) => {
    setChecked(true);
    if (typeof onChange === "function") {
      e.target = inputEl.current;
      onChange(e);
    }
  };

  return (
    <span className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input type="radio" className="ant-radio-input" ref={inputEl} />
        <span className="ant-radio-inner"></span>
      </span>
      <span>{children}</span>
    </span>
  );
};

export default Radio;