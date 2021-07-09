declare module '*.png';

type Navigation = {
  navigation: Navigate;
};

type Navigate = {
  navigate(screen: string): any;
};
