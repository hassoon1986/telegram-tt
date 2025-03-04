import React, { FC } from '../../../lib/teact/teact';
import { Bundles } from '../../../util/moduleLoader';

import { OwnProps } from './NewChatStep2';

import useModuleLoader from '../../../hooks/useModuleLoader';
import Loading from '../../ui/Loading';

const NewChatStep2Async: FC<OwnProps> = (props) => {
  const NewChatStep2 = useModuleLoader(Bundles.Extra, 'NewChatStep2');

  // eslint-disable-next-line react/jsx-props-no-spreading
  return NewChatStep2 ? <NewChatStep2 {...props} /> : <Loading />;
};

export default NewChatStep2Async;
