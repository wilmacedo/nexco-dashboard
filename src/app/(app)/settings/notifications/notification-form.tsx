"use client";

import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createAction } from "./notification-action";

const notificationFormSchema = z.object({
  communication: z.boolean().optional(),
  social: z.boolean().optional(),
});

export type NotificationFormValues = z.infer<typeof notificationFormSchema>;

export function NotificationForm({
  communication,
  social,
}: NotificationFormValues) {
  const [isPending, startTransaction] = useTransition();
  console.log({ communication, social });

  const form = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationFormSchema),
    defaultValues: { communication, social },
  });

  function onSubmit(data: NotificationFormValues) {
    startTransaction(async () => {
      try {
        await createAction(data);
        toast({
          title: "Notificações atualizadas!",
        });
      } catch (error) {
        toast({ title: `Erro ao atualizar notificações: ${error}` });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <FormField
                control={form.control}
                name="communication"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Emails de comunicação
                      </FormLabel>
                      <FormDescription>
                        Receba emails sobre sua atividade da conta.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <FormField
                control={form.control}
                name="social"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Emails sociais
                      </FormLabel>
                      <FormDescription>
                        Receba emails sobre novos produtos, lançamentos e mais.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        <Button
          disabled={isPending}
          className="h-10 w-24 flex items-center justify-center"
          variant="filled"
          type="submit"
        >
          {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
          {!isPending && <span>Atualizar</span>}
        </Button>
      </form>
    </Form>
  );
}
