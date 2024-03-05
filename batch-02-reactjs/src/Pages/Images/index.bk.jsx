import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux'; 
import ButtonGroup from '../../components/buttonGroup/button';

const imageList2 = [
  {
    src: 'https://images.unsplash.com/photo-1687294920924-b82d79864991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    alt: 'anh sa mac',
  },
];

const imageList = [
  'https://images.unsplash.com/photo-1687294920924-b82d79864991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
  'https://images.unsplash.com/photo-1685514473556-c983a5971d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1686481394225-dba348a3ee0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
  'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  'https://plus.unsplash.com/premium_photo-1673278171570-18af2a6ece31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
  'https://images.unsplash.com/photo-1686556029158-90f2cc511c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  'https://images.unsplash.com/photo-1686958633466-2a5e0579d2cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80',
  'https://images.unsplash.com/photo-1686900248731-5a492eb9a5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  'https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
  'https://plus.unsplash.com/premium_photo-1675756583711-ce312872227b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
];

const DEFAULT_AUTO_TIME = 1;

function ImagePage(props) {
  const [state, setState] = useState({
    index: 0,
    isRandom: true,
    isLooping: false,
    isAuto: false,
    nextImageAfter: DEFAULT_AUTO_TIME,
  });
  // const isRandom = useSelector((state) => state.imageReducer.isRandom);
  const [count, setCount] = useState(DEFAULT_AUTO_TIME);  // state.index

  // useEffect(() => { // Luôn chạy khi component render
  //   console.log('««««« Chạy mỗi khi render »»»»»');
  // })

  // useEffect(() => {
  //   console.log('««««« Chạy lần đầu tiên render = component­Did­Mount »»»»»');
  // }, [])

  // useEffect(() => {
  //   console.log('««««« Chạy khi state.index thay đổi »»»»»');
  // }, [state.index])

  // useEffect(() => { // Cleanup function
  //   return () => {
  //     console.log('««««« Chayj khi nao »»»»»');
  //   }
  // }, []);

  const [index, setIndex] = useState(0);

  // index

  const onRandom = () => {
    // dispatch(actionUpdateIndex)
    setState((prev) => ({
      ...prev,
      index: Math.floor(Math.random() * 10),
    }))
  }

  const onNextImage = () => {
    // setIndex(prevState => prevState + 1);
    if (state.index + 1 < imageList.length) {
      // setIndex(index + 1);
      // setState({
      //   index: state.index + 1,
      //   isLooping: state.isLooping,
      //   isRandom: state.isRandom,
      // })

      // setIndex(prevState => prevState + 1);
      setState((prev) => ({
        ...prev,
        index: prev.index + 1,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        index: 0,
      }));
    }
  };

  const onPreviousImage = () => {
    if (state.index - 1 >= 0) {
      setState((prev) => ({
        ...prev,
        index: prev.index - 1,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        index: imageList.length - 1,
      }));
    }
  };

  const onChangeLoop = () => {
    setState((prev) => ({
      ...prev,
      isLooping: !prev.isLooping,
      isRandom: !prev.isLooping ? false : prev.isRandom,
    }))

    // setState((prev) => {
    //   const newLoop = !prev.isLooping;
    //   return {
    //     ...prev,
    //     isLooping: newLoop,
    //   }
    // })
  }

  const onChangeRandom = () => {
    setState((prev) => {
      return {
        ...prev,
        isRandom: !prev.isRandom,
        isLooping: prev.isRandom ? prev.isLooping : false,
      }
    })
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
    if (state.isAuto) {
      setTimeout(() => {
        onRandom()
      }, state.nextImageAfter * 1000)
    }
  }, [state.isAuto, state.index])

  const onChangeAuto = () => {
    setState((prev) => {
      return {
        ...prev,
        isAuto: !prev.isAuto,
        isRandom: prev.isAuto ? prev.isRandom : false,
        isLooping: prev.isAuto ? prev.isLooping : false,
      }
    })
  }

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
        src={imageList[state.index]}
        alt="anh xem cho vui"
      />

      <h5>
        {state.index + 1}/{imageList.length}
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
          disabled={state.isLooping ? false : !state.index}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title="Next"
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={state.isRandom ? onRandom : onNextImage}
          // disabled={state.index === imageList.length - 1}
          disabled={state.isLooping ? false : state.index === imageList.length - 1}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title={`Looping ${state.isLooping ? 'on' : 'off'}`}
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onChangeLoop}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title={`Random ${state.isRandom ? 'on' : 'off'}`}
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onChangeRandom}
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
          title={`Auto ${state.isAuto ? 'on' : 'off'}`}
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