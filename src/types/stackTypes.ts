export type Tool = {
    name: string;
    tag: string;
    image: string;
    link: string;
    bgWhite?: boolean;
  };
  
  export type ToolCategory = {
    name: string;
    tools: Tool[];
  };