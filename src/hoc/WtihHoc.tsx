interface Props {
  isLoading: number;
}

export function WithHoc(WrappedComponent: any) {
  return function WithHoc({ isLoading, ...props }: Props) {
    if (isLoading) {
      return '로딩 중...';
    }
    return <WrappedComponent {...props} />;
  };
}
