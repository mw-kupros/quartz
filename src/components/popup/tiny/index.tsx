import React, { FC } from 'react';
import { Box } from 'rebass';
import Action from '../../action.type';
import Button from '../../button';

// Components
import Popup, { PopupProps } from '../index';
import Subtitle from '../../typography/subtitle';
import Text from '../../typography/text';

export interface TinyPopupProps extends Omit<PopupProps, 'css' | 'children'> {
  title: string;
  secondaryText: string;
  mainButton?: Action<React.MouseEvent<HTMLButtonElement>>;
  secondaryButton?: Action<React.MouseEvent<HTMLButtonElement>>;
  onClose?: () => void;
}

const TinyPopup: FC<TinyPopupProps> = ({
  title,
  secondaryText,
  mainButton,
  secondaryButton,
  onClose = () => {},
  ...props
}: TinyPopupProps) => {
  const [mainActionTitle, mainActionCallback] = mainButton || [];
  const [secondaryActionTitle, secondaryActionCallback] = secondaryButton || [];

  return (
    <Popup
      pt="14px"
      pl="20px"
      pr="20px"
      pb="20px"
      width="460px"
      {...props}
      onClose={onClose}
    >
      <Subtitle lineHeight="22px">{title}</Subtitle>
      <Text lineHeight="14px" py="12px">
        {secondaryText}
      </Text>
      <Box display="flex" mt="auto">
        <Box display="flex" ml="auto">
          {secondaryButton && (
            <Button
              intent="secondary"
              onClick={secondaryActionCallback}
              mr="11px"
            >
              {secondaryActionTitle}
            </Button>
          )}
          {mainButton && (
            <Button onClick={mainActionCallback}>{mainActionTitle}</Button>
          )}
        </Box>
      </Box>
    </Popup>
  );
};

export default TinyPopup;
