import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { ArrowRight, Check, ListFilter, Search, Tag } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import { tags } from "@utils/all";

const SoftwareListing = ({ softwareEntries }: { softwareEntries: any[] }) => {
  const [selectedPrice, setSelectedPrice] = useState({
    free: false,
    paid: false,
    freemium: false,
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag.toLowerCase())) {
        return prevSelectedTags.filter((t) => t !== tag.toLowerCase());
      } else {
        return [...prevSelectedTags, tag.toLowerCase()];
      }
    });
  };

  const filteredEntries = softwareEntries.filter((entry) => {
    if (selectedTags.length === 0) return true;
    return selectedTags.every((tag) => {
      return entry.data.Tags.some((t: string) => {
        return t.toLowerCase() === tag.toLowerCase();
      });
    });
  });
  return (
    <main className="mt-10">
      <div className="mx-auto max-w-3xl mb-10">
        <div className="flex">
          <Input
            type="search"
            placeholder="Search for tools"
            className="w-full p-6"
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
                  Filters <ListFilter className="ml-2" size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-52 p-2 max-h-60 overflow-y-scroll">
                <div>
                  <ul>
                    <li>
                      <Button
                        className="w-full justify-start py-1 px-2"
                        variant={"ghost"}>
                        Beta
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="w-full justify-start py-1 px-2"
                        variant={"ghost"}>
                        Open Source
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="w-full justify-start py-1 px-2"
                        variant={"ghost"}>
                        In Development
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="w-full justify-start py-1 px-2"
                        variant={"ghost"}>
                        Completed
                      </Button>
                    </li>
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
                          {selectedTags.includes(tag) && (
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
                setSelectedPrice({
                  free: !selectedPrice.free,
                  paid: false,
                  freemium: false,
                });
              }}>
              Free{" "}
              {selectedPrice.free ? <Check size={16} className="ml-1" /> : null}
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setSelectedPrice({
                  free: false,
                  paid: !selectedPrice.paid,
                  freemium: false,
                });
              }}>
              Paid{" "}
              {selectedPrice.paid ? <Check size={16} className="ml-1" /> : null}
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setSelectedPrice({
                  free: false,
                  paid: false,
                  freemium: !selectedPrice.freemium,
                });
              }}>
              Freemium{" "}
              {selectedPrice.freemium ? (
                <Check size={16} className="ml-1" />
              ) : null}
            </Button>
          </div>
        </div>
      </div>
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-auto px-4">
        {filteredEntries.map((toolName: any, index: number) => (
          <li
            key={toolName.id}
            className="border md:p-4 p-2 rounded-lg hover:shadow-md transition-all">
            <div className="flex flex-col gap-2">
              <img
                src={"https://picsum.photos/400/300"}
                alt={toolName.data.Name}
                sizes="(max-width: 800px) 100vw, 800px"
                width={800}
                height={300}
                loading={index <= 2 ? "eager" : "lazy"}
                decoding={index <= 2 ? "sync" : "async"}
                className="w-full h-52 rounded-md object-cover object-center bg-white"
              />

              <div>
                <div className="flex justify-between">
                  <span className="text-blue-600 bg-blue-100 py-1 px-3 rounded-full text-sm">
                    {toolName.data.Category}
                  </span>
                  <span className="text-green-600 bg-green-100 py-1 px-3 rounded-full text-sm">
                    free
                  </span>
                </div>
                <h2 className="text-3xl font-semibold leading-snug tracking-tight mt-1">
                  {toolName.data.Name}
                </h2>

                <span className="text-muted-foreground line-clamp-3">
                  {toolName.data.Description}
                </span>

                <ul className="flex gap-4 flex-wrap my-4">
                  {toolName.data.Tags.map((tag: string) => (
                    <li key={tag} className="text-xs text-muted-foreground/75">
                      #{tag}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-5">
                  <a
                    href={"#"}
                    className="hover:underline p-1 items-center gap-2 inline-flex">
                    Visit Site <ArrowRight size={16} />
                  </a>
                  <Button asChild>
                    <a href={`/software/${toolName.id}`}>More Details</a>
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SoftwareListing;
