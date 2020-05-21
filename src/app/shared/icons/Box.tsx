import * as React from "react";

const SvgBox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 26 26" {...props}>
    <path d="M8.594 3a.984.984 0 00-.469.188L2.687 7.03l-.062.032-.031.03h-.031a1.273 1.273 0 00-.157.095l-.031.03-.031.032a.466.466 0 00-.063.031 1.302 1.302 0 00-.062.094.472.472 0 00-.063.063v.03a.466.466 0 00-.031.063v.032h-.031l-2 4c-.196.386-.121.851.183 1.16.309.304.774.379 1.16.183L2 12.625V22c0 .55.45 1 1 1h15.031c.063-.004.125-.016.188-.031.031-.008.062-.02.093-.032a.986.986 0 00.344-.187.472.472 0 00.063-.063.472.472 0 00.062-.062l.063-.094a.472.472 0 00.062-.062l3.875-4.844c.14-.176.219-.398.219-.625v-4.563l2.719-2.718a.997.997 0 00.125-1.219L23 3.781a.466.466 0 00-.031-.062v-.031l-.032-.063a.954.954 0 00-.219-.344h-.03l-.032-.031v-.031h-.031l-.031-.031a.466.466 0 00-.063-.032H22.5a.472.472 0 00-.063-.062h-.03l-.032-.031h-.063l-.03-.032h-.063L22.187 3H8.595zM9 5h10.563l-2 2H6.155zM4 9h13v12H4v-9.875A.668.668 0 004 11zm3.719 1c-.551.078-.938.59-.86 1.14.079.551.59.938 1.141.86h5c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496H7.719z" />
  </svg>
);

export default SvgBox;