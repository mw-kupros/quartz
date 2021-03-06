import { Flex } from 'rebass';
import React, { FC } from 'react';
import { CheckboxProps as RebassCheckboxProps } from '@rebass/forms';

// Components
import Labeling from '../typography/labeling';
// Styles
import styles from './toggle-button.styles';

export interface ToggleButtonProps extends Omit<RebassCheckboxProps, 'css'> {
  children: string;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  name,
  id,
  disabled,
  onChange,
  checked,
  children,
  ...props
}: ToggleButtonProps) => (
  <Flex
    {...props}
    as="label"
    sx={styles}
    tx="buttons.toggleButton"
    variant="primary"
  >
    <input
      type="checkbox"
      name={name}
      id={id}
      disabled={disabled}
      onChange={onChange}
      checked={checked}
    />
    <Labeling>{children}</Labeling>
  </Flex>
);

export default ToggleButton;
