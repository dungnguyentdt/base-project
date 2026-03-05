import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { CopyOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";

interface ButtonCopyProps extends ButtonProps {
  value: string;
  textSuccess?: string;
  textError?: string;
}
export function ButtonCopy({
  value,
  textSuccess = "Copied to clipboard",
  textError = "Cannot copy",
  ...props
}: ButtonCopyProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      showSuccessToast(textSuccess);
    } catch (error) {
      showErrorToast(textError);
    }
  };

  return (
    <Button
      type="link"
      size="small"
      className="ml-2 p-0"
      icon={<CopyOutlined className="!text-base text-gray-400" />}
      onClick={handleCopy}
      {...props}
    />
  );
}
