"use client";
import { Input, Space } from "antd";

import { CSSProperties, Fragment, ReactNode } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SEARCH_DEBOUNCE = 300;

export const labelStyles: CSSProperties = {
  paddingBottom: "0.25rem",
  fontWeight: "500",
  fontSize: "14px",
};

export const SearchBox = ({
  type = "search",
  queryKey = "query",
  id = "search-box",
  label,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Input>, "defaultValue"> & {
  queryKey?: string;
  label?: ReactNode;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const query = searchParams.get(queryKey) ?? "";

  const handleDebouncedSearchChange = useDebouncedCallback(
    (searchTerm: string) => {
      const params = new URLSearchParams();

      if (searchTerm) params.set(queryKey, searchTerm);
      else params.delete(queryKey);

      router.replace(`${pathname}?${params.toString()}`);
    },
    SEARCH_DEBOUNCE
  );

  const Comp = label ? Space.Compact : Fragment;

  return (
    <Comp {...(label ? { direction: "vertical" } : {})}>
      {label && (
        <label style={labelStyles} htmlFor={id}>
          {label}
        </label>
      )}
      <Input
        id={id}
        defaultValue={query}
        type={type}
        allowClear
        onChange={(e) => handleDebouncedSearchChange(e.target.value)}
        {...props}
      />
    </Comp>
  );
};
