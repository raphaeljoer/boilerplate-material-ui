import React from 'react';
import { PaletteMode, useTheme, Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

type Props = {
  sx?: SxProps<Theme>;
  paletteMode?: PaletteMode;
};

export function Logo({ paletteMode = 'light', sx }: Props) {
  const theme = useTheme();
  const primary = {
    light: theme.palette.primary.main,
    dark: theme.palette.common.white
  };

  return (
    <Box sx={{ height: 16, color: primary[paletteMode], ...sx }}>
      <svg
        width="106"
        height="16"
        viewBox="0 0 106 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M103.957 10.6274C103.494 10.4109 102.967 10.3739 102.479 10.5235C101.99 10.6731 101.575
      10.9988 101.313 11.4373C101.051 11.8758 100.961 12.396 101.06 12.897C101.16 13.3981 101.442 13.8443
      101.852 14.1492C102.077 14.3183 102.334 14.4389 102.608 14.5035C102.725 14.5158 102.841 14.5438
      102.951 14.5867C102.989 14.6133 103.02 14.6484 103.042 14.6892C103.064 14.73 103.076 14.7753 103.077
      14.8215C103.086 14.9138 103.086 15.0067 103.077 15.099C103.077 15.1822 103.077 15.21 103.16 15.1801C103.322
      15.1176 103.476 15.0374 103.619 14.941C104.541 14.3562 105.308 13.2805 105.098 12.1429C105.04 11.8183 104.906
      11.512 104.707 11.2488C104.508 10.9856 104.251 10.7727 103.954 10.6274"
          fill={theme.palette.secondary.main}
        />

        <path
          d="M7.57627 0.694915C8.88701 0.694915 9.89266 0.988701 10.5932 1.57627C11.2938 2.15254 11.6441 2.97175 11.6441
      4.0339C11.6441 5.08475 11.4124 6.00565 10.9492 6.79661C10.4859 7.58757 9.81921 8.20339 8.94915 8.64407C8.0791 9.07345
      7.05085 9.28814 5.86441 9.28814H3.76271L3.1017 12.5763H0L2.37288 0.694915H7.57627ZM6.22034 6.81356C6.9661 6.81356
      7.55367 6.61582 7.98305 6.22034C8.41243 5.81356 8.62712 5.26554 8.62712 4.57627C8.62712 4.12429 8.48023 3.77966
      8.18644 3.54237C7.90396 3.29379 7.49153 3.16949 6.94915 3.16949H4.98305L4.25424 6.81356H6.22034Z"
          fill="currentColor"
        />

        <path
          d="M15.4637 12.6949C14.7745 12.6949 14.1586 12.5254 13.6163 12.1864C13.0739 11.8475 12.6502 11.3729 12.3451
      10.7627C12.0513 10.1525 11.9044 9.45198 11.9044 8.66102C11.9044 7.66667 12.1134 6.76271 12.5315 5.94915C12.9609
      5.13559 13.5428 4.49153 14.2773 4.01695C15.023 3.54237 15.8423 3.30508 16.7349 3.30508C18.1134 3.30508 19.0626
      3.84746 19.5824 4.9322L19.8874 3.40678H22.8874L21.0739 12.5763H18.0569L18.2773 11.4915C17.475 12.2938 16.5372
      12.6949 15.4637 12.6949ZM16.6332 10.3729C17.0513 10.3729 17.4411 10.2542 17.8027 10.0169C18.1643 9.77966 18.4468
      9.45763 18.6502 9.05085C18.8649 8.64407 18.9722 8.19774 18.9722 7.71186C18.9722 7.13559 18.814 6.67797 18.4976
      6.33898C18.1925 5.9887 17.7801 5.81356 17.2603 5.81356C16.8423 5.81356 16.4524 5.93785 16.0908 6.18644C15.7406
      6.42373 15.4581 6.74576 15.2434 7.15254C15.04 7.55932 14.9383 8 14.9383 8.47458C14.9383 9.05085 15.0908 9.51412
      15.3959 9.86441C15.7123 10.2034 16.1247 10.3729 16.6332 10.3729Z"
          fill="currentColor"
        />

        <path
          d="M34.0662 3.40678L28.1001 13.5763C27.6142 14.4237 27.0493 15.0395 26.4052 15.4237C25.7611 15.8079 25.021
      16 24.1849 16C23.6425 16 23.1623 15.9153 22.7442 15.7458C22.3261 15.5763 21.9193 15.322 21.5238 14.9831L23.0662
      13.0508C23.2244 13.209 23.3826 13.3164 23.5408 13.3729C23.7103 13.4407 23.8911 13.4746 24.0832 13.4746C24.5916
      13.4746 25.0606 13.2316 25.4899 12.7458L25.795 12.3559L23.8289 3.40678H26.8628L27.8459 9.44068L31.0154
      3.40678H34.0662Z"
          fill="currentColor"
        />

        <path
          d="M37.8618 4.83051C38.6866 3.80226 39.7431 3.28814 41.0313 3.28814L40.6753 6.05085C40.5736 6.03955
      40.4267 6.0339 40.2346 6.0339C39.4889 6.0339 38.8335 6.23164 38.2685 6.62712C37.7149 7.0226 37.3589 7.53107
      37.2007 8.15254L36.3194 12.5763H33.3024L35.1329 3.40678H38.1499L37.8618 4.83051Z"
          fill="currentColor"
        />

        <path
          d="M46.3795 3.30508C47.3061 3.30508 48.114 3.48023 48.8032 3.83051C49.4925 4.18079 50.0236 4.67232
      50.3965 5.30508C50.7693 5.93785 50.9558 6.67797 50.9558 7.52542C50.9558 8.53107 50.7185 9.42373 50.2439
      10.2034C49.7806 10.9831 49.1309 11.5932 48.2948 12.0339C47.4586 12.4633 46.5095 12.678 45.4473 12.678C44.5208
      12.678 43.7128 12.5028 43.0236 12.1525C42.3343 11.8023 41.8032 11.3107 41.4304 10.678C41.0575 10.0339 40.871
      9.28814 40.871 8.44068C40.871 7.43503 41.1027 6.54237 41.5659 5.76271C42.0405 4.98305 42.6902 4.37853 43.5151
      3.94915C44.3513 3.51977 45.3061 3.30508 46.3795 3.30508ZM46.1422 5.74576C45.4982 5.74576 44.9671 5.98305
      44.549 6.45763C44.1309 6.9322 43.9219 7.54802 43.9219 8.30508C43.9219 8.90395 44.0801 9.38983 44.3965
      9.76271C44.7128 10.1243 45.1366 10.3051 45.6676 10.3051C46.3117 10.3051 46.8428 10.0678 47.2609 9.59322C47.6789
      9.11864 47.888 8.50282 47.888 7.74576C47.888 7.14689 47.7298 6.66667 47.4134 6.30508C47.097 5.9322 46.6733
      5.74576 46.1422 5.74576Z"
          fill="currentColor"
        />

        <path
          d="M57.2025 0L54.694 12.5763H51.677L54.1855 0H57.2025Z"
          fill="currentColor"
        />

        <path
          d="M62.6977 0L60.1892 12.5763H57.1723L59.6807 0H62.6977Z"
          fill="currentColor"
        />

        <path
          d="M70.1251 0.508475C71.2551 0.508475 72.2607 0.751413 73.1421 1.23729C74.0347 1.71186 74.7297 2.37288
      75.2268 3.22034C75.724 4.0678 75.9726 5.0226 75.9726 6.08475C75.9726 7.31638 75.6562 8.44633 75.0234
      9.47458C74.3907 10.5028 73.5319 11.3164 72.4472 11.9153C71.3624 12.5028 70.176 12.7966 68.8878 12.7966C67.7579
      12.7966 66.7466 12.5537 65.854 12.0678C64.9726 11.5819 64.2833 10.9153 63.7862 10.0678C63.3003 9.20904 63.0573
      8.24294 63.0573 7.16949C63.0573 5.92655 63.3737 4.79661 64.0065 3.77966C64.6393 2.76271 65.4924 1.9661 66.5658
      1.38983C67.6506 0.80226 68.837 0.508475 70.1251 0.508475ZM69.9048 3.13559C69.272 3.13559 68.6732 3.30508
      68.1082 3.64407C67.5432 3.98305 67.0912 4.44633 66.7523 5.0339C66.4133 5.62147 66.2438 6.25989 66.2438 6.94915C66.2438
      7.54802 66.3737 8.09039 66.6336 8.57627C66.8935 9.06215 67.2494 9.44633 67.7014 9.72881C68.1534 10.0113
      68.6506 10.1525 69.1929 10.1525C69.8144 10.1525 70.402 9.98305 70.9557 9.64407C71.5093 9.29379 71.95 8.82486
      72.2777 8.23729C72.6054 7.64972 72.7692 7.00565 72.7692 6.30508C72.7692 5.70621 72.6449 5.16949 72.3963
      4.69491C72.1477 4.20904 71.8031 3.83051 71.3624 3.55932C70.9217 3.27684 70.4359 3.13559 69.9048 3.13559Z"
          fill="currentColor"
        />

        <path
          d="M86.8124 0.694915H89.6937L87.3209 12.5763H84.609L80.6598 5.45763L79.2192 12.5763H76.3208L78.6937
      0.694915H81.4056L85.3717 7.84746L86.8124 0.694915Z"
          fill="currentColor"
        />

        <path
          d="M100.899 3.16949H94.6282L94.1706 5.38983H99.8485L99.357 7.84746H93.679L93.2214 10.1017H99.679L99.1875
      12.5763H89.6451L92.018 0.694915H101.391L100.899 3.16949Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  );
}
