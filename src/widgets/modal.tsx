import React, { useState } from "react";
import * as yup from "yup";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Button from "@/shared/ui/button";

// Define the validation schema
const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

interface MyAlertDialogProps {
  name: string;
}

const MyAlertDialog: React.FC<MyAlertDialogProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleClose = () => setIsOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    console.log(newEmail); // Log the email on every input change
  };

  const handleSubmit = async () => {
    try {
      // Validate email
      await emailSchema.validate({ email });

      // If validation passes, log the email
      console.log(email);

      // Close the modal
      handleClose();
    } catch (err: any) {
      // If validation fails, show the error
      setError(err.message);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger
        className="py-6 text-white bg-[#FF5D17] px-32  rounded-xl hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30 font-bold text-2xl"
        onClick={() => setIsOpen(true)}
      >
        Get VPN
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-[60%] mx-auto p-6 rounded-xl shadow-lg ">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 font-bold text-2xl"
        >
          &times;
        </button>

        <AlertDialogHeader className="flex flex-col gap-6">
          <AlertDialogTitle className="uppercase font-bold text-3xl">
            Your Name
          </AlertDialogTitle>
          <h2 className="font-medium">{name}</h2>
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-[#F8F8F8] p-6 border-2 border-[#646464] rounded-3xl w-full"
            value={email}
            onChange={handleInputChange}
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <AlertDialogDescription className="flex justify-start items-center gap-2 mt-4">
            <img
              src="/lockModalIco.png"
              alt="lockModalIco.png"
              width={15}
              height={15}
            />
            Your information is 100% secure. We don’t share your personal
            information.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <Button
            variant="secondary"
            className="w-full  mt-4  font-bold text-2xl"
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MyAlertDialog;
