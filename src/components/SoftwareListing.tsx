import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Check, ListFilter, Search, Tag } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import { Categories, tags } from "@utils/all";
import { Card, CardContent, CardFooter } from "./ui/card";
import { cn } from "@lib/utils";

const SoftwareListing = ({ softwareEntries }: { softwareEntries: any[] }) => {
  const [selectedPrice, setSelectedPrice] = useState({
    free: false,
    paid: false,
    freemium: false,
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag.toLowerCase())) {
        return prevSelectedTags.filter((t) => t !== tag.toLowerCase());
      } else {
        return [...prevSelectedTags, tag.toLowerCase()];
      }
    });
  };

  const filterByPrice = (entry: any) => {
    if (selectedPrice.free && entry.data.pricing.toLowerCase() === "free")
      return true;
    if (selectedPrice.paid && entry.data.pricing.toLowerCase() === "paid plans")
      return true;
    if (
      selectedPrice.freemium &&
      entry.data.pricing.toLowerCase() === "freemium"
    )
      return true;
    if (!selectedPrice.free && !selectedPrice.paid && !selectedPrice.freemium)
      return true;
    return false;
  };

  const filterByTags = (entry: any) => {
    if (selectedTags.length === 0) return true;
    return selectedTags.some((tag) => {
      return entry.data.Tags.some((t: string) => {
        return t.toLowerCase() === tag.toLowerCase();
      });
    });
  };

  const filterByCategory = (entry: any) => {
    if (!selectedCategory) return true;
    return entry.data.Category.toLowerCase() === selectedCategory.toLowerCase();
  };

  const filterBySearch = (entry: any) => {
    if (searchQuery === "") return true;
    return entry.data.Name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const filteredEntries = softwareEntries.filter(
    (entry) =>
      filterByPrice(entry) &&
      filterByTags(entry) &&
      filterByCategory(entry) &&
      filterBySearch(entry),
  );

  return (
    <main className="mt-10">
      <div className="mx-auto max-w-3xl mb-10">
        <div className="flex">
          <Input
            type="search"
            placeholder="Search for tools"
            className="w-full p-6"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="p-6">
            Find <Search size={18} className="ml-2" />
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 pt-6">
          <div className="flex flex-wrap gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="rounded-full">
                  Category <ListFilter className="ml-2" size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-52 p-2 max-h-60 overflow-y-scroll">
                <div>
                  <ul>
                    {Categories.map((category: string) => (
                      <li key={category}>
                        <Button
                          className="w-full justify-start capitalize py-1 px-2"
                          variant={"ghost"}
                          onClick={() =>
                            setSelectedCategory((prev) =>
                              prev === category ? null : category,
                            )
                          }>
                          {category}
                          {selectedCategory === category && (
                            <Check size={16} className="ml-2" />
                          )}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="rounded-full">
                  Tags <Tag className="ml-2" size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-52 p-2 max-h-60 overflow-y-scroll">
                <div>
                  <ul>
                    {tags.map((tag: string) => (
                      <li key={tag}>
                        <Button
                          className="w-full justify-start py-1 px-2"
                          variant={"ghost"}
                          onClick={() => toggleTag(tag)}>
                          {tag}
                          {selectedTags.includes(tag.toLowerCase()) && (
                            <Check size={16} className="ml-2" />
                          )}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setSelectedPrice((prev) => ({
                  free: !prev.free,
                  paid: false,
                  freemium: false,
                }));
              }}>
              Free{" "}
              {selectedPrice.free ? <Check size={16} className="ml-1" /> : null}
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setSelectedPrice((prev) => ({
                  free: false,
                  paid: !prev.paid,
                  freemium: false,
                }));
              }}>
              Paid{" "}
              {selectedPrice.paid ? <Check size={16} className="ml-1" /> : null}
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setSelectedPrice((prev) => ({
                  free: false,
                  paid: false,
                  freemium: !prev.freemium,
                }));
              }}>
              Freemium{" "}
              {selectedPrice.freemium ? (
                <Check size={16} className="ml-1" />
              ) : null}
            </Button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-auto px-4">
        {filteredEntries.map((toolName: any, index: number) => (
          <a href={"/software/" + toolName.id} key={index}>
            <Card
              key={toolName.id}
              className="h-full flex flex-col hover:shadow-md group shadow transition-all duration-300 mb-1 overflow-hidden">
              <img
                src={toolName.data.Images[0]}
                alt={toolName.data.Name}
                sizes="(max-width: 800px) 100vw, 800px"
                width={800}
                height={300}
                loading={index <= 2 ? "eager" : "lazy"}
                decoding={index <= 2 ? "sync" : "async"}
                className="w-full h-52 rounded-md group-hover:scale-105 transition-all duration-300 object-cover object-center bg-white"
              />
              <CardContent className="mt-4 flex-1">
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-500 bg-blue-100 dark:bg-blue-500/15 py-1 px-3 rounded-full text-sm">
                    {toolName.data.Category}
                  </span>
                  <span
                    className={cn(
                      "py-1 px-3 rounded-full text-sm",
                      toolName.data.pricing === "Free"
                        ? "text-green-600 bg-green-100/70 dark:bg-green-900/25"
                        : toolName.data.pricing === "Paid plans"
                          ? "text-red-600 bg-red-100/70 dark:bg-red-900/25"
                          : "text-yellow-600 bg-yellow-100/70 dark:bg-yellow-900/25",
                    )}>
                    {toolName.data.pricing}
                  </span>
                </div>
                <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1">
                  {toolName.data.Name}
                </h2>

                <span className="text-muted-foreground line-clamp-3">
                  {toolName.data.Description}
                </span>

                <ul className="flex gap-3 flex-wrap mt-4 mb-2">
                  {toolName.data.Tags.map((tag: string) => (
                    <li key={tag} className="text-xs text-muted-foreground/75">
                      #{tag}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex">
                <Button asChild>
                  <a href={`/software/${toolName.id}`}>More Details</a>
                </Button>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </main>
  );
};

export default SoftwareListing;
