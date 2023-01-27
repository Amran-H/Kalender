import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MySchedule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const { data: singleshedeule = [], refetch } = useQuery({
    queryKey: ["single-schedule"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/single-schedule`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  const { data: teamschedule = [], refetch: re } = useQuery({
    queryKey: ["multi-schedule"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/multi-schedule`);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleingleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/single-schedule/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success("Event Has been Cancel");
        }
        console.log(data);
      });
  };

  const handleTeamDelete = (id) => {
    fetch(`http://localhost:5000/multi-schedule/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          re();
          toast.success("Team Event Has been Cancel");
        }
        console.log(data);
      });
  };

  //   const [, setSingleshedeule] = useState([]);
  //   console.log(singleshedeule);
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/single-schedule`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setSingleshedeule(data);
  //       });
  //   }, []);
  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg font-semibold",
                selected
                  ? "bg-emerald-500 text-white shadow"
                  : "text-black border-none hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Individual Event
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2 rounded-lg font-semibold",
                selected
                  ? "bg-emerald-500 text-white shadow"
                  : "text-black border-none hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Team Event
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 border-none">
          <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
            <ul>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Event Category</th>
                        <th>Date</th>
                        <th>User Email</th>
                        <th>Have You Join It</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {singleshedeule.map((schedules, i) => (
                        <tr>
                          <th>{i + 1}</th>
                          <td>{schedules?.meetingCategory}</td>
                          <td>{schedules?.date}</td>
                          <td>{schedules.email}</td>
                          <td>
                            <div className="flex justify-center">
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                  <select
                                    {...register("status")}
                                    className="p-1 rounded-md my-2 max-w-xs text-white bg-success"
                                  >
                                    <option>Yes</option>
                                    <option>No</option>
                                  </select>
                                </div>

                                <div className="flex justify-center">
                                  <button
                                    className="btn btn-xs  text-white btn-success"
                                    type="submit"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </td>
                          <td>
                            <button
                              onClick={() => handleingleDelete(schedules._id)}
                              className="btn btn-error btn-xs text-white"
                            >
                              Cancel
                            </button>
                            <button className="rounded-lg btn-success cursor-not-allowed btn-xs text-white">
                              Complete
                            </button>
                            <button className="cursor-not-allowed rounded-lg btn-error btn-xs text-white">
                              Event Incomplete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
            <ul>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Number Of User Join</th>
                        <th>Have You Join It</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamschedule.map((teams, i) => (
                        <tr>
                          <th>{i + 1}</th>
                          <td>{teams?.teamCategory}</td>
                          <td>{teams.date}</td>
                          <td>{teams.email.length}</td>
                          <td>
                            <label
                              htmlFor="my-modal-3"
                              className="btn btn-success btn-xs text-white"
                            >
                              Change Status
                            </label>

                            <div className="mx-auto">
                              <input
                                type="checkbox"
                                id="my-modal-3"
                                className="modal-toggle"
                              />
                              <div className="modal">
                                <div className="modal-box relative">
                                  <label
                                    htmlFor="my-modal-3"
                                    className="btn btn-sm btn-circle absolute right-2 top-2"
                                  >
                                    ✕
                                  </label>
                                  <div className="flex justify-center">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                      <div className="form-control">
                                        <select
                                          {...register("status")}
                                          className="select my-5 w-full max-w-xs text-white bg-success "
                                        >
                                          <option>Yes</option>
                                          <option>No</option>
                                        </select>
                                      </div>
                                      <div className="flex justify-center">
                                        <button
                                          className="mt- btn btn-sm text-white btn-success"
                                          type="submit"
                                        >
                                          Complete
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <button
                              onClick={() => handleTeamDelete(teams._id)}
                              className="btn btn-error btn-xs text-white"
                            >
                              Cancel
                            </button>
                            <button className="rounded-lg btn-success cursor-not-allowed btn-xs text-white">
                              Complete
                            </button>
                            <button className="cursor-not-allowed rounded-lg btn-error btn-xs text-white">
                              Event Incomplete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
            <ul>
              <li className="relative rounded-md p-3 hover:bg-gray-100">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Number Of User Join</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Break the English Nut</td>
                        <td>20/01/2023</td>
                        <td>10</td>
                        <td>
                          <button className="rounded-lg btn-success cursor-not-allowed btn-xs text-white">
                            Complete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default MySchedule;
