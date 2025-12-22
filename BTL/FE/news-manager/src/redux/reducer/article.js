const objectInit = {
    type: "allArticle",
    upload: {
      allArticle: true,
      approvedArticle: false,
      rejectArticle: false,
    },
}
export const reducerArticle = (state = objectInit, action) => {
  switch (action.type) {
    case "allArticle":
      return objectInit;
    case "approvedArticle":
      return {
        type: action.type,
        upload: {
          allArticle: false,
          approvedArticle: true,
          rejectArticle: false,
        },
      };
    case "rejectArticle":
      return {
        type: action.type,
        upload: {
          allArticle: false,
          approvedArticle: false,
          rejectArticle: true,
        },
      };
    default: 
      return state;
  }
};
