"use client";
import { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { isAddress } from "ethers/lib/utils";
import { useRouter } from "next/navigation";

export default function CreateSCW() {
  const [signers, setSigners] = useState<string[]>([]);
  const { address } = useAccount();
  const lastInput = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setSigners([address as string]);
  }, [address]);

  useEffect(() => {
    if (lastInput.current) {
      lastInput.current.focus();
    }
  }, [signers]);

  function addNewSigner() {
    setSigners((signers) => [...signers, ""]);
  }

  function removeSigner(index: number) {
    if (signers[index] === undefined) return;
    if (signers.length <= 1) return;
    if (signers[index].length > 0) return;
    const newSigners = [...signers];
    newSigners.splice(index, 1);
    setSigners(newSigners);
  }

  return null;
}