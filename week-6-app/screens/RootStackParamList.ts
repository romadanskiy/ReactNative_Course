import ITodoData from '../components/ITodoData';

type RootStackParamList = {
  TodoList: undefined;
  TodoEdit: {
    index: number;
    data: ITodoData;
    changeStatus: (index: number, isClosed: boolean) => void;
    deleteTodo: (index: number) => void;
    changeImage: (index: number, imageUri: string) => void;
  };
};

export default RootStackParamList;