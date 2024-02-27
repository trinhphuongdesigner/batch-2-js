import React, { useState, useEffect } from 'react';
import ButtonGroup from '../../components/buttonGroup/button';
import { useDispatch, useSelector } from 'react-redux';
import { onNextImageAction, onPrevImageAction, onRandomAction, onToggleAutoAction, randomImageAction, toggleLoopingImageAction } from 'store/image/action';

const imageList2 = [
  {
    src: 'https://images.unsplash.com/photo-1687294920924-b82d79864991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    alt: 'anh sa mac',
  },
];

const DEFAULT_AUTO_TIME = 1;

function ImagePage(props) {
  const dispatch = useDispatch();

  const isRandom = useSelector((state) => state.imageReducer.isRandom);
  const isLooping = useSelector((state) => state.imageReducer.isLooping);
  const imageList = useSelector((state) => state.imageReducer.imageList);
  const isAuto = useSelector((state) => state.imageReducer.isAuto);
  const index = useSelector((state) => state.imageReducer.index);

  const [state, setState] = useState({
    nextImageAfter: DEFAULT_AUTO_TIME,
  });

  const [count, setCount] = useState(DEFAULT_AUTO_TIME);  // state.index

  const onRandom = () => {
    dispatch(onRandomAction(Math.floor(Math.random() * 10)));
  }
  
  const onToggleRandom = () => {
    dispatch(randomImageAction())
  }

  const onNextImage = () => {
    dispatch(onNextImageAction())
  };

  const onPreviousImage = () => {
    dispatch(onPrevImageAction())
  };

  const onToggleLoop = () => {
    dispatch(toggleLoopingImageAction());
  }

  const onChangeTime = (e) => {
    setCount(e.target.value);
  }

  const onApplyTimeout = () => {
    setState((prev) => ({
      ...prev,
      nextImageAfter: count,
    }))

    setCount(0);
  }

  useEffect(() => {
    if (isAuto) {
      setTimeout(() => {
        onRandom()
      }, state.nextImageAfter * 1000)
    }
  }, [isAuto, index])

  const onChangeAuto = () => {
    dispatch(onToggleAutoAction())
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <img
        style={{
          width: '600px',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
        src={imageList[index]}
        alt="anh xem cho vui"
      />

      <h5>
        {index + 1}/{imageList.length}
      </h5>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ButtonGroup
          style={{
            marginRight: '20px',
          }}
          icon={<i className="fa-solid fa-chevron-left fa-xl" />}
          title="Previous"
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onPreviousImage}
          // disabled={!state.index}
          disabled={isLooping ? false : !index}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title="Next"
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={isRandom ? onRandom : onNextImage}
          // disabled={state.index === imageList.length - 1}
          disabled={isLooping ? false : index === imageList.length - 1}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title={`Looping ${isLooping ? 'on' : 'off'}`}
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onToggleLoop}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title={`Random ${isRandom ? 'on' : 'off'}`}
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onToggleRandom}
        />

        <input type="number" value={count} style={{ height: '50px', borderRadius: '10px' }} min={1} onChange={onChangeTime} />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title="Apply"
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onApplyTimeout}
        />
        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title={`Auto ${isAuto ? 'on' : 'off'}`}
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onChangeAuto}
        />
      </div>
    </div>
  );
}

export default ImagePage;
