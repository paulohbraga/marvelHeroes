import md5 from 'js-md5';

const publicKey = '3d887617d602fbca0c700cd29422ef7e';
const secretKey = 'a91f2af18980048833477330e554a2f5cc2701bd';

export const generateAPIUrlWithHash = () => {
  const ts = Number(new Date());
  const hash = md5.create();
  hash.update(ts + secretKey + publicKey);
  return `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&apikey=${publicKey}&hash=${hash.hex()}`;
};
