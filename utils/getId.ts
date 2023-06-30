export default function getId(url) {
  return url.split('/').at(-1);
}