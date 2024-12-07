type Section = {
  id: string;
  createDate: string;
  updateDate: string;
  title: string;
  content: string;
  type: string;
  sectionMedia: string;
  questionGroups: {
    [key: string]: any;
  };
};

export default Section;