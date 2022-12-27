import React, { SVGProps } from 'react';
import styled, { css } from 'styled-components';

export interface ISoundiseIconProps
  extends SVGProps<SVGSVGElement>,
    ISoundiseIconPathProps {}

interface ISoundiseIconPathProps {
  variant?: 'primary' | 'secondary';
}

export const SoundiseIcon = ({
  variant = 'primary',
  ...props
}: ISoundiseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 256 256"
    fill="none"
    data-testid="soundise-icon"
    {...props}
  >
    <Path
      d="M129.667 156.375C127.483 156.375 125.32 156.809 123.303 157.653C121.285 158.497 119.452 159.734 117.908 161.293C116.363 162.852 115.138 164.703 114.303 166.74C113.467 168.777 113.037 170.96 113.037 173.165V210.696C113.045 212.337 112.711 213.962 112.057 215.464C111.404 216.966 110.444 218.313 109.241 219.417C108.039 220.521 106.619 221.357 105.076 221.872C103.532 222.386 101.899 222.567 100.282 222.403C97.3612 222.065 94.669 220.644 92.7267 218.417C90.7843 216.189 89.7302 213.312 89.7685 210.345V124.269C89.7631 118.246 88.5697 112.285 86.2581 106.733C83.9464 101.181 80.5628 96.15 76.3046 91.9325C72.0464 87.7151 66.9989 84.3961 61.4566 82.1692C55.9143 79.9423 49.9883 78.8521 44.0242 78.9622C19.4514 79.4305 0 100.211 0 125.078V149.731C0.00177749 154.127 1.71144 158.346 4.7615 161.481C7.81157 164.617 11.9585 166.42 16.311 166.502C25.6261 166.677 33.2598 158.697 33.2598 149.283V124.269C33.2516 122.627 33.5853 121.003 34.2391 119.501C34.893 117.998 35.8524 116.651 37.0551 115.547C38.2579 114.443 39.677 113.607 41.2206 113.093C42.7641 112.578 44.3975 112.397 46.0148 112.561C48.9319 112.899 51.6215 114.317 53.5633 116.541C55.5052 118.764 56.5615 121.636 56.5281 124.6V210.686C56.5348 216.708 57.729 222.669 60.0411 228.22C62.3532 233.771 65.7369 238.802 69.9948 243.019C74.2528 247.236 79.2997 250.556 84.8414 252.783C90.3831 255.01 96.3086 256.101 102.272 255.993C126.845 255.524 146.297 234.735 146.297 209.925V173.165C146.297 168.712 144.544 164.442 141.426 161.293C138.307 158.144 134.077 156.375 129.667 156.375Z"
      variant={variant}
      data-testid="soundise-icon-path"
    />
    <Path
      d="M255.971 94.1618C255.753 89.8645 253.907 85.8163 250.815 82.8546C247.723 79.8929 243.622 78.2443 239.36 78.25C230.219 78.25 222.74 86.2205 222.74 95.4594V174.58C222.738 176.1 222.421 177.603 221.81 178.993C221.199 180.383 220.307 181.629 219.192 182.651C218.077 183.673 216.763 184.448 215.334 184.928C213.905 185.408 212.393 185.582 210.893 185.438C208.184 185.122 205.687 183.803 203.884 181.736C202.081 179.67 201.102 177.002 201.134 174.248V85.7132C201.134 85.6157 201.134 85.5181 201.134 85.4206V45.2263C201.134 20.8366 182.069 0.485761 157.96 0.00772229C152.104 -0.102387 146.285 0.965972 140.843 3.15047C135.4 5.33496 130.443 8.59186 126.261 12.7311C122.078 16.8704 118.754 21.8092 116.482 27.2594C114.21 32.7095 113.035 38.5619 113.028 44.4751V120.464C113.028 124.917 114.78 129.187 117.898 132.336C121.017 135.485 125.247 137.254 129.657 137.254C134.068 137.254 138.298 135.485 141.416 132.336C144.535 129.187 146.287 124.917 146.287 120.464V44.4751C146.288 42.9542 146.604 41.4503 147.215 40.0598C147.825 38.6694 148.717 37.423 149.832 36.4007C150.947 35.3784 152.262 34.6027 153.692 34.1233C155.121 33.6439 156.634 33.4713 158.134 33.6168C160.843 33.9305 163.34 35.2473 165.143 37.3125C166.946 39.3777 167.926 42.0445 167.894 44.797V81.3621C167.894 81.4499 167.894 81.5475 167.894 81.645V174.57C167.9 180.481 169.073 186.332 171.342 191.78C173.612 197.229 176.934 202.167 181.114 206.306C185.293 210.445 190.247 213.703 195.687 215.889C201.127 218.074 206.943 219.145 212.797 219.037C236.954 218.579 256 198.179 256 173.828V95.0301C255.99 94.7374 255.981 94.4448 255.971 94.1618Z"
      variant={variant}
      data-testid="soundise-icon-path"
    />
  </svg>
);

const Path = styled.path<ISoundiseIconPathProps>`
  fill: ${({ theme }) => theme.colors.textPrimary};

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      fill: ${({ theme }) => theme.colors.textSecondary};
    `}
`;
