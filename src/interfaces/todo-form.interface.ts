import { Dispatch, SetStateAction } from "react";

export interface TodoFormI {
    onAdd: (newText: string) => void;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
}

