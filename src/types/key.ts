export type KeyReq = {
  id: string;
};

export type KeyRes = {
  ok: boolean;
  data: {
    apiKey: string;
  };
};
