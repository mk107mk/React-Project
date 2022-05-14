interface Props {
  celsius: number;
}

export function BoilingVerdict(props: Props) {
  return props.celsius >= 100 ? <p>물이 끓는다</p> : <p>물이 안끓는다</p>;
}
